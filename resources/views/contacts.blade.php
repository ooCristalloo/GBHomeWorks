@extends('layouts.default')

@section('content')
    <div>
        <p>
            @if($email === "")
                Введите вашу почту
            @else
                Почта {{$email}}:<br>
                Номер телефона: {{$phone}}<br>
                Где находится: {{$address}}<br>
                Почтовый индекс: {{$post_code}}
            @endif
        </p>
    </div>
@stop
