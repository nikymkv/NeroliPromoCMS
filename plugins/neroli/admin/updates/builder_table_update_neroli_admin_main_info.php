<?php namespace Neroli\Admin\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateNeroliAdminMainInfo extends Migration
{
    public function up()
    {
        Schema::table('neroli_admin_main_info', function($table)
        {
            $table->dateTime('expired_in')->nullable(false)->unsigned(false)->default(null)->change();
        });
    }
    
    public function down()
    {
        Schema::table('neroli_admin_main_info', function($table)
        {
            $table->time('expired_in')->nullable(false)->unsigned(false)->default(null)->change();
        });
    }
}
