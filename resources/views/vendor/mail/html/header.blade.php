@props(['url'])
<tr>
<td class="header">
<a href="{{ $url }}" style="display: inline-block;">
@if (trim($slot) === 'Laravel')
<img src="{{ config('app.url') }}/assets/logo/light_128.png" class="logo" alt="Teenhealth Logo">
@else
{{ $slot }}
@endif
</a>
</td>
</tr>
