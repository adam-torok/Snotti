<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','registrate']]);
    }

    public function login()
    {
        $credentials = request(['email', 'password']);

        dd($credentials);


        if (! $token = auth('api')->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }

    public function me()
    {
        return response()->json(auth('api')->user());
    }

    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    public function refresh()
    {
        return $this->respondWithToken(auth('api')->refresh());
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'user' => $this->guard()->user(),
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60
        ]);
    }

    public function registrate()
    {
        $this->validate(request(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required'
        ]);
        
        if($user = User::create([
            'name' => request('name'),
            'email' => request('email'),
            'password' => request('password'),
            ])
        ){
            return response($user, 200);
        }else{
            return response('Something went wrong!');
        }
    }

    public function guard(){
        return Auth::Guard('api');
    }
}
