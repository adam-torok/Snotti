<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;

class NoteController extends Controller
{

    public function show(Request $request){
        $id = $request->id;
        $note = Note::find($id);
        return response($note,200);
    }

    public function update(Request $request){
        $note = Note::find($request->note_id);
        $note->title = $request->title;
        $note->note = $request->note;
        $note->save();
        return response($note);
    }

    public function store(Request $request){
        if($note = Note::create(['folder_id' => $request->folder_id,'title' => $request->title,'note' => $request->note])){
            return response($note, 200);
        }else{
            return response(400,'Something went wrong!');
        }
    }

    public function destroy(Request $request){
        $note = Note::find($request->id);
        if($note->delete()){
            return response('Sucessfully deleted note', 200);
        }else{
            return response('Something bad happened when deleting note', 400);
        }
    }
}
