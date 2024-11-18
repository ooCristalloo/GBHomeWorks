@extends('layouts.default')

@section('content')
    <div>
        <p>
            @if($age < 18)
                Пользователь слишком молод
            @else
                Данные пользователя {{$name}}:<br>
                Лет: {{$age}}<br>
                Где находится: {{$address}}<br>
                Конкретнее: {{$position}}
            @endif
        </p>
    </div>
@stop
