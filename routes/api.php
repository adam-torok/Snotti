<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\FolderController;
use App\Http\Controllers\NoteController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;


Route::get('folders/{id}/', [UserController::class, 'getNotesByFolderId']);
Route::get('folders', [UserController::class, 'getAllFolders']);
Route::post('folders/create', [FolderController::class, 'store']);
Route::delete('folders/{id}/', [FolderController::class, 'destroy']);


Route::get('note/{id}', [NoteController::class, 'show']);
Route::delete('note/{id}/', [NoteController::class, 'destroy']);
Route::post('note/create', [NoteController::class, 'store']);
Route::post('note/update', [NoteController::class, 'update']);
Route::get('notes', [UserController::class, 'getAllNotes']);

Route::post('registrate', [AuthController::class, 'registrate']);

Route::group(['prefix' => 'auth'], function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
});