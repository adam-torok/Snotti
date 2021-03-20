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

Route::get('notes', [UserController::class, 'getAllNotes']);

Route::get('folder/{id}/notes/{note_id}', [NoteController::class, 'showNoteById']);

Route::group(['prefix' => 'auth'], function () {
    Route::post('registrate', [AuthController::class, 'registrate']);
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
});