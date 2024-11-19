@extends('layouts.default')

@section('content')
   <form name="employee-form" id="employee-form" method="post" action="{{url('store-form')}}">
       @csrf
       <div class="form-group">
           <label for="name">Введите ваше имя</label>
           <input type="text" id="name" name="name" class="form-control" required="true">
       </div>
       <div class="form-group">
           <label for="email">Введите вашу почту</label>
           <input type="email" id="email" name="email" class="form-control" required="true">
       </div>
       <div class="form-group">
           <label for="work-data">Занимаемая должность</label>
           <input type="text" id="work-data" name="work-data" class="form-control" required="true">
       </div>
       <div class="form-group">
           <label for="work-history">Опыт работы</label>
           <textarea id="work-history" name="work-history" class="form-control" required="true"></textarea>
       </div>
       <button type="submit" class="btn btn-primary">Подтвердить</button>
   </form>
@stop
