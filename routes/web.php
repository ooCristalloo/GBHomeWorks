<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('home', ['name' => "Илья", 'age' => 22, 'position' => "диван", 'address' => "квартира"]);
});

Route::get('/contacts', function () {
    return view('contacts', ['address' => "квартира", 'post_code' => 43563, 'email' => "", 'phone' => 87456248747]);
});
