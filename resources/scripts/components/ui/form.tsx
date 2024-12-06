import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form"

import { AnimatePresence, motion } from "motion/react"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Input } from "./input"
import { CircleAlert } from "lucide-react"

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
)

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    <Label
      ref={ref}
      className={cn(error && "text-red-500 dark:text-red-900", className)}
      htmlFor={formItemId}
      {...props}
    />
  )
})
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
})
FormControl.displayName = "FormControl"


const FormInput = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentPropsWithoutRef<typeof Input> & 
    { prefixIcon?: React.ReactNode, suffixIcon?: React.ReactNode }
>(({ className, prefixIcon, suffixIcon, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <div className="relative">
      {prefixIcon && React.cloneElement(prefixIcon as React.ReactElement, {
        className: cn(
          "absolute w-5 h-5 inset-y-0 top-3 left-[.85rem] flex text-zinc-600",
          (prefixIcon as React.ReactElement).props.className,
        )
      })}
      <Input
        ref={ref}
        id={formItemId}
        className={cn(
          prefixIcon && "pl-11",
          error && "border-red-400 focus-visible:ring-red-400",
          className
        )}
        aria-invalid={!!error}
        {...props}
      />
      {suffixIcon && React.cloneElement(suffixIcon as React.ReactElement, {
        className: cn(
          "absolute w-5 h-5 inset-y-0 top-[.7rem] right-3 flex text-zinc-600",
          (suffixIcon as React.ReactElement).props.className,
        )
      })}
    </div>
  );
});
FormInput.displayName = "FormInput";

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()
  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-[0.8rem] text-zinc-500 dark:text-zinc-400", className)}
      {...props}
    />
  )
})
FormDescription.displayName = "FormDescription"

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message) : children

  return (
    <AnimatePresence>
      {body && (
        <motion.p
          ref={ref}
          id={formMessageId}
          className={cn("text-sm text-red-400 flex items-center gap-x-1.5", className)}
          initial={{ opacity: 0, y: 5, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          exit={{ opacity: 0, y: 5, height: 0 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        >
          <CircleAlert className="w-4 h-4 text-red-400 inline-block" />
          {body}
        </motion.p>
      )}
    </AnimatePresence>
  )
})
FormMessage.displayName = "FormMessage"

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormInput,
  FormDescription,
  FormMessage,
  FormField,
}
