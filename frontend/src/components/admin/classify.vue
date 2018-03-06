<template>
	
	<el-container>
	  	<el-header style="text-align: left; font-size: 12px">
	      	<el-button @click="addClass"> 添加分类 </el-button>
	    </el-header>
	    
	    <el-main>
	      <el-table :data="tableData">
	      	<el-table-column type=index label="#" width="140" align="left">
	        </el-table-column>
	        <el-table-column prop="createtime" label="创建时间" width="140" align="left">
	        </el-table-column>
	        <el-table-column prop="name" label="分类名称" width="120" align="left">
	        </el-table-column>
	        <el-table-column label="操作" align="left">
	        		<template slot-scope="scope">
		        <el-button
		          size="mini"
		          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
		        <el-button
		          size="mini"
		          type="danger"
		          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
		      </template>
	        </el-table-column>
	      </el-table>
	      </el-main>
	  	
	    
	    
	 </el-container>
</template>

<script>
	
export default{
		
	data() {
	      return {
	        tableData:[]
	      }
	},
	mounted(){
		this.$store.dispatch('getClass')
		.then( (res) => {
			this.tableData = res.data
		})
	},
	methods:{
		addClass(){
			
			this.$prompt('请输入分类名称', '提示', {
	          confirmButtonText: '确定',
	          cancelButtonText: '取消',
	          inputPattern: /\S/,
	          inputErrorMessage: '请输入分类名称'
	        }).then(({ value }) => {
	          this.$message({
	            type: 'success',
	            message: '新增分类: ' + value
	          });
	          
	          this.$store.dispatch('addClass',{classify:value})
	          .then( (res) =>{
	          	 console.log('-----分类：',res)
	          	 this.tableData = res.data
	          })
	          
	        }).catch(() => {
	          this.$message({
	            type: 'info',
	            message: '取消输入'
	          });       
	        });
	        
		},
		handleEdit(index,row){
			console.log(index,row)
		},
		handleDelete(index,row){
			
			
			this.$confirm('删除分类?', '提示', {
	          confirmButtonText: '确定',
	          cancelButtonText: '取消',
	          type: 'warning'
	        }).then(() => {
	          this.$message({
	            type: 'success',
	            message: '删除成功!'
	          });
	          
	          this.$store.dispatch('delClass',row)
				.then( (res)=>{
					this.tableData = res.data	
				})
	          
	        }).catch(() => {
	          this.$message({
	            type: 'info',
	            message: '已取消删除'
	          });          
	        });
	        
			
			
		}
	}
}
</script>

<style>
</style>