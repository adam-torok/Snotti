<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//Route::post('registrate', [RegistrateController::class, 'store']);
Route::group(['prefix' => 'auth'], function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
});