<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Customer;

use App\Http\Requests\CreateCustomerRequest;

class CustomersController extends Controller
{
    public function all()
    {
        $customers = Customer::latest()->get();

        return response()->json([
            "customers" => $customers
        ], 200);
    }

    public function get($id)
    {
        $customer = Customer::whereId($id)->first();

        return response()->json([
            "customer" => $customer
        ], 200);
    }

    public function new(Request $request)
    {
        $customer = Customer::create($request->only(["name", "email", "phone", "website"]));

        return response()->json([
            "customer" => $customer
        ], 200);
    }

    public function destroy($id)
    {
        Customer::where('id', $id)->delete();
        return response()->json([], 202);
    }
}
