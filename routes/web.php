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

Route::get('/form', function () {
    return view('form');
});
Route::post('/store-form', [\App\Http\Controllers\EmployeeController::class, 'store']);

Route::put('/user/{id}', [\App\Http\Controllers\EmployeeController::class, 'update'])->name('users.update');
