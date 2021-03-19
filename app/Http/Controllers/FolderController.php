<?php

namespace App\Http\Controllers;

use App\Models\Folder;
use Illuminate\Http\Request;

class FolderController extends Controller
{
    
    public function index(){
        
    }

    public function show(Request $id){
        
    }

    public function store(Request $request){
        if($folder = Folder::create(['name' => $request->name,'user_id' => $request->user_id])){
            return response($folder, 200);
        }else{
            return response('Something went wrong!');
        }
    }

    public function update(){

    }

    public function destroy(){

    }
}
