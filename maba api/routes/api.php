<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::apiResource('products', ProductController::class)->middleware('auth:sanctum');
Route::get('products', [ProductController::class , 'index']);

Route::apiResource('carts', CartController::class)->middleware('auth:sanctum');
Route::get('count', [CartController::class , 'count'])->middleware('auth:sanctum');

Route::apiResource('profile', ProfileController::class)->middleware('auth:sanctum');

Route::apiResource('orders', OrderController::class)->middleware('auth:sanctum');

Route::post('register', [AuthController::class , "register"]);

Route::post('login', [AuthController::class , "login"]);

Route::get('users', [UserController::class , "index"]);

