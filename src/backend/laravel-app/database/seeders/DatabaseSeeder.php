<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\RoleSeeder;
use Database\Seeders\UserSeeder;
use Database\Seeders\ReglementInterieurSeeder;
use Database\Seeders\RegleSeeder;
use Database\Seeders\CoursSeeder;
use Database\Seeders\ClasseSeeder;
use Database\Seeders\EleveSeeder;
use Database\Seeders\ProfesseurSeeder;
use Database\Seeders\FauteSeeder;
use Database\Seeders\PersonnelSeeder;
use Database\Seeders\ConvocationSeeder;
use Database\Seeders\NotificationSeeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call([
            RoleSeeder::class,
            UserSeeder::class,
            ClasseSeeder::class,
            ReglementInterieurSeeder::class,
            RegleSeeder::class,
            CoursSeeder::class,
            ProfesseurSeeder::class,
            ClasseSeeder::class,
            EleveSeeder::class,
            FauteSeeder::class,
            PersonnelSeeder::class,
            NotificationSeeder::class,
            ConvocationSeeder::class,
        ]);
    }
}
