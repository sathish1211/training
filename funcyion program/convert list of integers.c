#include<stdio.h>
int single_integer(int a[],int len){
    int sum=0;
    for(int i=0;i<len;i++){
      sum=(sum*10)+a[i];
    }
    return sum;
}
int main(){
    int a[]={1,2,3,4};
    int len=sizeof(a)/sizeof(a[0]);
    printf("%d",single_integer(a,len));
}
