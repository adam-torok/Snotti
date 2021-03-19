<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;

class UserController extends Controller
{
    
    public function index(){
        // USER
    }

    public function show(){
        // SHOW USER
    }

    public function update(){
        // UPDATE USER
    }

    public function destroy(){
        // DELETE USER
    }

    public function getNotesByFolderId(Request $request){

        $user = $this->getAuthenticatedUser();
        $currentUser = User::find($user->id);
        $notes = $currentUser->notes()->where('folder_id', '=', $request->id)->get();
        if($notes){
            return json_encode($notes);
        }else{
            return response(400,'nem talaltuk');
        }
    }

    public function getAllNotes(Request $request){
        $user = User::find($request->id); 
        $notes = $user->notes()->get();
        if($notes){
            return json_encode($notes);
        }else{
            return response(400,'nem talaltuk');
        }
    }

    public function getAllFolders(){
        $user = $this->getAuthenticatedUser();
        $currentUser = User::find($user->id);
        $folders = $currentUser->folders()->get();
        if($folders){
            return json_encode($folders);
        }else{
            return response(400,'nem talaltuk');
        }
    }

     public function getAuthenticatedUser()
        {
            if (! $user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['user_not_found'], 404);
            }
        return $user;
    }
}
