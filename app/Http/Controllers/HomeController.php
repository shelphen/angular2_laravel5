<?php

namespace App\Http\Controllers;

use Auth;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\AuthenticatesAndRegistersUsers;

class HomeController extends Controller
{
    use AuthenticatesAndRegistersUsers;
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('index');
    }

    public function login(Request $request)
    {
        // $this->validateLogin($request);
        $credentials = $this->getCredentials($request);

        if (Auth::guard($this->getGuard())->attempt($credentials, $request->has('remember'))) {
            return $this->handleUserWasAuthenticated($request);
        }

        return response()->json(['status'=>'unauthorized'], 401);

    }

    public function logout()
    {
        Auth::guard($this->getGuard())->logout();
        return response()->json(['status' => 'success'], 200);
        // return redirect(property_exists($this, 'redirectAfterLogout') ? $this->redirectAfterLogout : '/');
    }

    protected function handleUserWasAuthenticated(Request $request)
    {

        return response()->json(['status'=>'authorized'], 200);
        // if (method_exists($this, 'authenticated')) {
        //     return $this->authenticated($request, Auth::guard($this->getGuard())->user());
        // }
    }

    // protected function validateLogin(Request $request)
    // {
    //     $this->validate($request, [
    //         $this->loginUsername() => 'required', 'password' => 'required',
    //     ]);
    // }

    // public function authenticated(Request $request, User $user ) {
    //     // // Succes flash message
    //     // alert()->success('Succesvol ingelogd', 'Welkom');

    //     // return redirect()->intended( $this->redirectPath() );

    //     return response()->json(['status'=>'authorized']);
    // }
}
