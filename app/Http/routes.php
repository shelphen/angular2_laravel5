<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('index');
});
// Route::get('/auth', 'HomeController@index');
// Route::post('/login', 'HomeController@login');
Route::get("/api/animals", function() {
    return response()->json([['name' => 'dog'], ['name' => 'cat'], ['name' => 'elephant'], ['name' => 'elk'], ['name' => 'spider']]);
});
// Route::auth();

// Route::get('/home', 'HomeController@index');
// Route::get('/login', 'HomeController@showLoginForm');
// Route::post('/login', 'HomeController@login');
// Route::post('/logout', 'HomeController@logout');

// Route::get('customer/profile', ['middleware'=>, 'auth', 'CustomerController@index']);
// Route::get('/customer/profile', 'CustomerController@index');