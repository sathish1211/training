/*

Input number of rows: 4
1
2 3
4 5 6
7 8 9 10

*/




#include <stdio.h>
int main()
{
   int i,j,n,a=1;
   printf("enter the number  : ");
   scanf("%d",&n);
   for(i=1;i<=n;i++)
   {
	for(j=1;j<=i;j++)
    {
	   printf("%d ",a);
       a++;
    }
	printf("\n");
   }

   return 0;
}