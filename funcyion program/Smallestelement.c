#include<stdio.h>
int small( int a[],int len)
{
    int y=a[0];
    for(int i=1;i<len;i++)
    {
        if(y  > a[i])
        {
            y=a[i];
        }
    }
    //return y;
    printf("%d",y);
} 

void main()
{
    int a[] = {-1,3,4,5},len=0;
    len = sizeof(a)/sizeof(a[0]);
    //printf("%d",small(a,len));
    small(a,len);
}