#include<stdio.h>
int happy_number(int x){
    int rem,n,sum=0;
    for(;x>0;x=x/10){
        rem=x%10;
        n=rem*rem;
        sum=sum+n;
    }
    return sum; 
}

int main(){
    int n;
    printf("enter the number  ");
    scanf("%d",&n);
    while(n>=0){
      n=happy_number(n);
    }
    printf("%d",n);
    if(n==1)
      printf("given number is happy number");
    else
       printf("given number is not happpy number");
}
