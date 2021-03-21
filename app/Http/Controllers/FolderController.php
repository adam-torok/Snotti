<?php

namespace App\Http\Controllers;

use App\Models\Folder;
use Illuminate\Http\Request;

class FolderController extends Controller
{
    
    public function index(){
        
    }

    public function store(Request $request){
        if($folder = Folder::create(['name' => $request->name,'user_id' => $request->user_id])){
            return response($folder, 200);
        }else{
            return response(400,'Something went wrong!');
        }
    }

    public function update(){

    }

    public function destroy(Request $request){
        $folder = Folder::find($request->id);

        if($folder->delete()){
            if($folder->notes()){
                $folder->notes()->delete();
                return response('Sucesfully deleted!',200);
            }
            return response('Sucesfully deleted!',200);
        }else{
            return response('Something went wrong!',400);
        }
    }
}
