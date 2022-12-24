import java.util.*;
public class NestedBrackets {

	public static String nestExpression(String exp){

		Stack<Character> stack=new Stack<>();
		String answer="";
   int openbracket=0,closeBracket=0;

		for(int i=0;i<exp.length();i++){

			char ch=exp.charAt(i);

			 if(ch=='{')
            {
                stack.push(ch);
            }
            else if(ch=='}')
            {
                if(!stack.empty() && stack.peek()=='{')
                {
									answer=answer+stack.peek()+ch;
                    stack.pop();
                }
                else
                {
                    stack.push(ch);
                }
            }

						
		}

						while(!stack.empty()){
							if(stack.peek() == '{'){
								openbracket++;
							}else{
								closeBracket++;
							}
							stack.pop();
						}

						int avg=((openbracket)/2)+((closeBracket)/2);//updating the brackets.

						for(int i=0;i<avg;i++){
							answer=answer+"{";
						}

						for(int i=0;i<avg;i++){
							answer=answer+"}";
						}
		return answer;
	}
	
	public static void main(String[] args) {
		
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter the expression");
		String exp=sc.nextLine();

		// the length of a valid expression should always be even.

		if(exp.length() == 1){
			exp=exp+"}";
		}
		else if(exp.length() % 2 == 1){
			exp=exp.substring(0, exp.length()-1);
		}

			String str=nestExpression(exp);

			System.out.println("The well-nested expression");

			System.out.println(str);

			sc.close();
		
	}
}
