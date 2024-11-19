<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EmployeeController extends Controller
{

    public function store(Request $request)
    {
        [$name, $email, $workData, $workHistory] = [
            $request->input('name'),
            $request->input('email'),
            $request->input('work-data'),
            $request->input('work-history')];
    }

    public function update(Request $request, $id)
    {

    }
}
