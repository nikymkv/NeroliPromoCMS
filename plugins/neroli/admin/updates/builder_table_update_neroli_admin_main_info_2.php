<?php namespace Neroli\Admin\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateNeroliAdminMainInfo2 extends Migration
{
    public function up()
    {
        Schema::table('neroli_admin_main_info', function($table)
        {
            $table->string('address', 200);
            $table->string('phone', 20);
        });
    }
    
    public function down()
    {
        Schema::table('neroli_admin_main_info', function($table)
        {
            $table->dropColumn('address');
            $table->dropColumn('phone');
        });
    }
}
