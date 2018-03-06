import Admin from '@/components/admin/admin';
import Classify from '@/components/admin/classify';
import Article from '@/components/admin/article';


export default [
	{
      path: '/admin',
      name: 'Admin',
      component: Admin,
      children:[
      	{
      		path:'/admin/classify',
      		component:Classify
      	},
      	{
      		path:'/admin/article',
      		component:Article
      	}
      
      ]
    }
]
