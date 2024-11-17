<?php

use App\Http\Controllers\FormProcessor;
use App\Models\Groups;
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
    return view('welcome');
});

Route::get('/useform', [FormProcessor::class, 'index']);
Route::post('/store_form', [FormProcessor::class, 'store'])->name("form.store");
Route::get('/test/database', function () {
    $group = new Groups;

    $group->name = 'Test Group';
    $group->description = 'This is a test group.';

    if ($group->save()) {
        return response('Group created successfully!', 201);
    } else {
        return response('Failed to create group.', 500);
    }
});

