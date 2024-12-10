@props([
    'url',
    'color' => 'primary',
    'align' => 'center',
])
<table align="{{ $align }}" width="100%" cellpadding="0" cellspacing="0" role="presentation">
<tr>
<td align="{{ $align }}">
    <a href="{{ $url }}"
       style="background-color:rgb(59,130,246);color:rgb(255,255,255);border-radius:0.5rem;margin-top:12px;margin-bottom:28px;
              padding:16px 32px;line-height:100%;text-decoration:none;display:inline-block;max-width:100%;"
       target="_blank">
        {{ $slot }}
    </a>
</td>
</tr>
</table>
