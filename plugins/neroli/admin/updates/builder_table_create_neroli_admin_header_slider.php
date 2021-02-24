<?php namespace Neroli\Admin\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateNeroliAdminHeaderSlider extends Migration
{
    public function up()
    {
        Schema::create('neroli_admin_header_slider', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('alt', 200);
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('neroli_admin_header_slider');
    }
}
