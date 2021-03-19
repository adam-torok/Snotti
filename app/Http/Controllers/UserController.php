<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    
    public function index(){
        
    }

    public function show(){

    }

    public function store(){

    }

    public function update(){

    }

    public function getNotesByFolderId(Request $request){
        $user = User::find($request->user_id); // CHANGE IT TO AUTH::USER or something else
        $notes = $user->notes()->where('folder_id', '=', $request->id)->get();
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

    public function getAllFolders(Request $request){
        $user = User::find($request->id);
        $folders = $user->folders()->get();
        if($folders){
            return json_encode($folders);
        }else{
            return response(400,'nem talaltuk');
        }
    }
}
