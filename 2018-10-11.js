//把只包含因子2、3和5的数称作丑数（Ugly Number）。例如6、8都是丑数，但14不是，因为它包含因子7。 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。 
//输入描述:
//整数N
//输出描述: 第N个丑数
//输入例子1: 6
//输出例子1: 6

//分析：这是一道在网络上广为流传的面试题，据说google曾经采用过这道题。
//所谓一个数m是另一个数n的因子，是指n能被m整除，也就是n % m == 0。根据丑数的定义，丑数只能被2、3和5整除。也就是说如果一个数如果它能被2整除，我们把它连续除以2；如果能被3整除，就连续除以3；如果能被5整除，就除以连续5。如果最后我们得到的是1，那么这个数就是丑数，否则不是。

//基于前面的分析，我们可以写出如下的函数来判断一个数是不是丑数：
function isUglyNumber(num){
  while(num % 2 == 0){
    num/=2
  }
  while(num %3 == 0){
    num/=3
  }
  while(num %5 == 0){
    num/=5
  }
  return num == 1?true:false
}


//接下来，我们只需要按顺序判断每一个整数是不是丑数，即：
function getUglyNumber1(index){
  if(index <= 0){
    return 0;
  }
  var number = 0;
  var uglyFound = 0;
  while(uglyFound < index){
    ++number;
    if(isUglyNumber(number)){
      ++uglyFound;
      console.log(uglyFound+":"+number)
    }
  }
  return number;
}
getUglyNumber1(10)


//  基于TCP的应用层协议有：SMTP、TELNET、HTTP、FTP
//  基于UDP的应用层协议：DNS、TFTP（简单文件传输协议）、RIP（路由选择协议）、DHCP、BOOTP（是DHCP的前身）、IGMP（Internet组管理协议）


// JavaScript的函数调用有哪几种方式？请举例说明，并分析其不同之处。
// 1.函数调用
//        this指向：window
//        返回值  ：由return值决定，如果没有return语句就表示没有返回值
// 2.方法调用
//        this指向：该方法的调用者
//        返回值  ：由return语句决定
// 3.构造函数调用
//        this指向：当前构造函数创建的对象
//        返回值  ：
//                a、没有手动添加返回值，默认返回this
//                b、return了一个基本数据类型（数字、布尔值、null、undefined），最终返回this
//                c、return了一个复杂数据类型（对象），最终返回该对象
// 4.上下文调用
//        call和apply 是方法， 是所有函数都具有的方法。 Function.prototype
//        只要函数调用call/apply 方法，那么该函数就会立即执行。
//        this指向：   
//                 a、传递一个null/undefined------------------->window
//                 b、传递一个数字、字符串、布尔值------->对应的基本包装类型的对象
//                 c、传递一个对象------------------------------->指向该对象
//        返回值  ：由return语句决定