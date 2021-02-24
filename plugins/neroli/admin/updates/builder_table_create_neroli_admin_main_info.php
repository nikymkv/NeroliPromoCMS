<?php namespace Neroli\Admin\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateNeroliAdminMainInfo extends Migration
{
    public function up()
    {
        Schema::create('neroli_admin_main_info', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('title', 200);
            $table->string('desc_1', 500);
            $table->string('desc_2', 500);
            $table->time('expired_in');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('neroli_admin_main_info');
    }
}
