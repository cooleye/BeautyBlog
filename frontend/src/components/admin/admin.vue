<template>
	
	<div>
	<el-header>
		<h1> Admin</h1>
	</el-header>
	<el-container style="height: 500px; border: 1px solid #eee">
	  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
	    <el-menu :default-openeds="['1', '3']" :router=true>
	      <el-submenu index="1">
	        <template slot="title"><i class="el-icon-menu"></i>管理面板</template>
	        <el-menu-item-group>
	          <el-menu-item index="/admin/article">文章管理</el-menu-item>
	          <el-menu-item index="/admin/classify">分类管理</el-menu-item>
	        </el-menu-item-group>
	      </el-submenu>
	    </el-menu>
	  </el-aside>
  	<router-view></router-view>
	  
	</el-container>
	
	</div>
	
	
</template>

<script>
	
	export default {
    
  };
</script>

<style>
	
	h1{
		padding: 0;
		margin: 0;
	}
	.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>