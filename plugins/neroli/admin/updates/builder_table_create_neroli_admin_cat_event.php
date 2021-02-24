<?php namespace Neroli\Admin\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateNeroliAdminCatEvent extends Migration
{
    public function up()
    {
        Schema::create('neroli_admin_cat_event', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('title', 200);
            $table->string('slug', 200);
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('neroli_admin_cat_event');
    }
}
