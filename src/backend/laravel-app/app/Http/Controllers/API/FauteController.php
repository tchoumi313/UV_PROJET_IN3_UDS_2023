<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Eleve;
use App\Models\Regle;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\Faute;
use App\Models\User;
use App\Models\Role;

class FauteController extends Controller
{

    /**
     * @OA\Get(
     *     path="/api/faute/findAll",
     *     summary="Find all mistakes",
     *     description="Retrieve a list of all mistakes with associated eleves and regles",
     *     operationId="indexFautes",
     *     tags={"Fautes"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Parameter(
     *         name="Authorization",
     *         in="header",
     *         required=true,
     *         @OA\Schema(
     *             type="string",
     *             example="Bearer {your_token}"
     *         ),
     *         description="JWT token"
     *     ),
     *  security={{"bearerAuth":{}}},
     *     tags={"fautes"},
     *     @OA\Response(
     *         response=200,
     *         description="Success",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="success", type="boolean", example=true),
     *             @OA\Property(property="message", type="string", example="Permission updated successfully"),
     *             @OA\Property(property="content", type="array", @OA\Items(ref="#/components/schemas/Faute")
     *         )
     *         )
     *     ),
     *     @OA\Response(
     *         response=300,
     *         description="Error - Unauthorized",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="string", example="Unauthorized")
     *         )
     *     )
     * )
     */
    public function index()
    {
        $fautes = Faute::has('regle')->has('eleve')->with(['regle', 'eleve'])->get();

        return response()->json([
            'message' => 'Liste des fautes',
            'success' => true,
            'content' => $fautes
        ],200);
    }

    /**
     * @OA\Get(
     *     path="/api/faute/findOne/{id}",
     *     summary="Get mistake information",
     *     description="Get information about a specific mistake",
     *     operationId="viewFaute",
     *     tags={"Fautes"},
     *     @OA\Parameter(
     *         name="Authorization",
     *         in="header",
     *         required=true,
     *         @OA\Schema(
     *             type="string",
     *             default="Bearer {your_token}"
     *         ),
     *         description="JWT token"
     *     ),
     *      @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID of Faute to get information for",
     *         required=true,
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Error - Unauthorized",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="string", example="Unauthorized")
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Error - Not found",
     *         @OA\JsonContent(
     *               @OA\Property(property="message", type="string", example="Faute not found"),
     *             @OA\Property(property="success", type="boolean", example="false"),
     *
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Success",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Faute trouvé(e)"),
     *             @OA\Property(property="success", type="boolean", example="true"),
     *             @OA\Property(property="content", type="object", ref="#/components/schemas/Faute")
     *         )
     *     )
     * )
     */
    public function view($fauteId)
    {

        $faute = Faute::with(['eleve', 'regle'])->find($fauteId);


        if ($faute) {
            return response()->json([
                'message' => 'faute trouvé(e)',
                'success' => true,
                'content' => $faute
            ], 200);
        } else {
            return response()->json([
                'message' => 'faute non trouvée',
                'success' => false,
            ], 404);
        }
    }

    /**
     * @OA\Post(
     *     path="/api/faute/create",
     *     summary="Create a new Mistake",
     *     description="Create a new Mistake resource",
     *     operationId="createMistake",
     *     tags={"Fautes"},
     *     @OA\Parameter(
     *         name="Authorization",
     *         in="header",
     *         required=true,
     *         @OA\Schema(
     *             type="string",
     *             default="Bearer {your_token}"
     *         ),
     *         description="JWT token"
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *           required={"libelle", "gravite", "eleveId", "regleId"},
     *             @OA\Property(property="libelle", type="string", format="text", example="Etre sorti sans avoir eu la permission"),
     *             @OA\Property(property="gravite", type="string", format="text", example="grave avec recessivite"),
     *             @OA\Property(property="eleveId", type="integer", example=2),
     *             @OA\Property(property="regleId", type="integer", example=3)
     *         )
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Error - Invalid request data",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="The given data was invalid"),
     *             @OA\Property(property="errors", type="object", example={
     *                 "libelle": {
     *                     "The libelle field is required."
     *                 }
     *             }),
     *             @OA\Property(property="success", type="boolean", example=false)
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Success",
     *         @OA\JsonContent(
     *             @OA\Property(property="success", type="boolean", example=true),
     *             @OA\Property(property="message", type="string", example="Faute created successfully"),
     *             @OA\Property(property="content", ref="#/components/schemas/Faute")
     *         )
     *     )
     * )
     */
    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'libelle' => 'required|string|max:255',
            'gravite' => 'required',
            'eleveId' => 'required|integer',
            'regleId' => 'required|integer',


        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Could not create this mistake',
                'success' => false,
                'error' => $validator->errors()
            ], 400);
        }

        $fautte = Faute::create([
            'eleveId' => $request->input('eleveId'),
            'regleId' => $request->input('regleId'),
            'libelle' => $request->input('libelle'),
            'gravite' => $request->input('gravite'),
        ]);


        $fautte->eleve = Eleve::with('faute')->find($fautte->id);
        $fautte->regle = Regle::with('faute')->find($fautte->id);

        return response()->json([
            'message' => 'Mistake created successfully',
            'success' => true,
            'content' => $fautte
        ], 200);
    }
    /**
     * @OA\Put(
     *     path="/api/faute/update",
     *     summary="Update a mistake's information",
     *     description="Update a mistake's information",
     *     operationId="updatemistake",
     *     tags={"Faute"},
     *     @OA\Parameter(
     *         name="Authorization",
     *         in="header",
     *         required=true,
     *         @OA\Schema(
     *             type="string",
     *             default="Bearer {your_token}"
     *         ),
     *         description="JWT token"
     *     ),
     *      @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *              required={"libelle","gravite","eleveId","regleId"},
     *             @OA\Property(property="libelle", type="string", format="text", example="Etre assidue"),
     *             @OA\Property(property="gravite", type="string", format="text",  example="grave"),
     *             @OA\Property(property="eleveId", type="integer", example=1),
     *             @OA\Property(property="regleId", type="integer", example=3)
     *         )
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Error - Invalid request data",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="object", example={
     *                "libelle": {
     *                     "The libelle field is required."
     *                 }
     *             })
     *         )
     *     ),
     *
     *     @OA\Response(
     *         response=401,
     *         description="Error - Unauthorized",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="string", example="Unauthorized")
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Error - Not found",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="string", example="mistake not found")
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Success",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Faute modifié qvec succèss"),
     *             @OA\Property(property="success", type="boolean", example="true"),
     *             @OA\Property(property="content", type="object", ref="#/components/schemas/Faute"),
     *         )
     *     )
     * )
     */

    public function update(Request $request, $id)
    {
        // on récupère la faute associé
        $fauteFound = Faute::find($id);
        if ($fauteFound) {

            $validator = Validator::make($request->all(), [
                'libelle' => 'required',
                'gravite' => 'required',
                'eleveId' => 'required|integer',
                'regleId' => 'required|integer',
            ]);
        } else {
            return response()->json([
                'message' => 'Course not exists',
                'success' => false,
            ], 400);
        }

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Could not update this course',
                'success' => false,
                'error' => $validator->errors()
            ], 400);
        }


        // Mise à jour des champs de l'objet faute
        $fauteFound->libelle = $request->input('libelle');
        $fauteFound->gravite = $request->input('gravite');
        $fauteFound->eleveId = $request->input('eleveId');
        $fauteFound->regleId = $request->input('regleId');


        $fauteFound->save();

        return response()->json([
            'message' => 'Mistake updated successfully',
            'success' => true,
            'content' => $fauteFound
        ], 200);
    }

    /**
     * @OA\Delete (
     *     path="/api/faute/delete/{id}",
     *     summary="Delete a mistake",
     *     description="Delete a mistake resource",
     *     operationId="deleteMistake",
     *     tags={"Fautes"},
     *     @OA\Parameter(
     *         name="Authorization",
     *         in="header",
     *         required=true,
     *         @OA\Schema(
     *             type="string",
     *             default="Bearer {your_token}"
     *         ),
     *         description="JWT token"
     *     ),
     *      @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID of mistake to delete",
     *         required=true,
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *
     *     @OA\Response(
     *         response=401,
     *         description="Error - Unauthorized",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="string", example="Unauthorized")
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Error - Not found",
     *         @OA\JsonContent(
     *             @OA\Property(property="error", type="string", example="Mistake not found")
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Success",
     *        @OA\JsonContent(
     *             type="object",
     *                type="object",
     *             @OA\Property(property="success", type="boolean", example=true),
     *             @OA\Property(property="message", type="string", example="Faute deleted successfully")
     *     )
     * )
     * )
     */
    public function delete($fauteId)
    {
        $faute = Faute::find($fauteId);

        if (!$faute) {
            return response()->json([
                'message' => 'Mistake not found',
                'success' => false
            ], 404);
        }

        $faute->delete();

        return response()->json([
            'success' => true,
            'message' => 'Mistake deleted successfully'
        ], 200);
    }
}
