<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only(['email', 'password']);

        if (Auth::attempt($credentials)) {
            return response()->json([
                'success' => true,
                'message' => 'Usuário logado com sucesso',
            ]);
        }

        return response()->json([
            'success' => false,
            'message' => 'Credenciais inválidas',
        ]);
    }

    public function logout()
    {
        Auth::logout();

        return response()->json([
            'success' => true,
            'message' => 'Logout feito com sucesso',
        ]);
    }
}
