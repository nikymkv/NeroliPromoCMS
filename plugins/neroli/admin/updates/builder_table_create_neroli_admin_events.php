<?php namespace Neroli\Admin\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateNeroliAdminEvents extends Migration
{
    public function up()
    {
        Schema::create('neroli_admin_events', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('title', 200);
            $table->date('date');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('neroli_admin_events');
    }
}
