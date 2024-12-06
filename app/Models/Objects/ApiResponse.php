<?php

namespace App\Models\Objects;

use Illuminate\Http\JsonResponse;

class ApiResponse
{
    /**
     * @var int
     */
    private int $code;

    /**
     * @var string|null
     */
    private ?string $message;

    /**
     * @var array|null
     */
    private ?array $errors;

    /**
     * @param int|null $code
     * @param string|null $message
     * @param array|null $errors
     */
    public function __construct(?int $code = 200, ?string $message = null, ?array $errors = null)
    {
        $this->code = $code ?? 200;
        $this->message = $message;
        $this->errors = $errors;
    }

    /**
     * Convert the response to JsonResponse
     *
     * @param mixed|null $data
     * @return JsonResponse
     */
    public function toJson(mixed $data = null): JsonResponse
    {
        $response = [
            'status' => $this->code >= 200 && $this->code < 300,
            'code' => $this->code,
        ];

        if ($this->message !== null) {
            $response['message'] = $this->message;
        }

        if ($data !== null) {
            $response['data'] = $data;
        }

        if ($this->errors !== null) {
            $transformedErrors = [];
            foreach ($this->errors as $field => $messages) {
                $transformedErrors[$field] = is_array($messages) ? $messages[0] : $messages;
            }
            $response['errors'] = $transformedErrors;
        }

        return response()->json($response, $this->code);
    }

    /**
     * Create a success response
     *
     * @param string|null $message
     * @param mixed|null $data
     * @return JsonResponse
     */
    public static function  success(?string $message = null, mixed $data = null): JsonResponse
    {
        return (new self(200, $message))->toJson($data);
    }

    /**
     * Create an error response
     *
     * @param int $code
     * @param string|null $message
     * @param array|null $errors
     * @return JsonResponse
     */
    public static function error(int $code = 400, ?string $message = null, ?array $errors = null): JsonResponse
    {
        return (new self($code, $message, $errors))->toJson();
    }

    /**
     * Create a new API response
     *
     * @param int|null $code
     * @param string|null $message
     * @param mixed|null $data
     * @param array|null $errors
     * @return JsonResponse
     */
    public static function create(
        ?int    $code = 200,
        ?string $message = null,
        mixed   $data = null,
        ?array  $errors = null
    ): JsonResponse {
        return (new self($code, $message, $errors))->toJson($data);
    }
}
