
`index()`函数用于找出列表中某个元素第一次出现的索引位置。

	语法为：列表名字.index(查找对象名字)

```python

	例：
		num = [0,1,0,1,2]
		print(num.index(1))  # 数字1首先出现的索引位置是list[1]（索引位置从0开始）
		print(num.index(2))  # 数字2首先出现的索引位置是list[4]
		
```
		
		
可能比较难理解，上大例子：
```python
	import random
	
	# 出拳
	punches = ['石头','剪刀','布']
	computer_choice = random.choice(punches)
	user_choice = ''
	user_choice = input('请出拳：（石头、剪刀、布）')  # 请用户输入选择
	while user_choice not in punches:  # 当用户输入错误，提示错误，重新输入
	    print('输入有误，请重新出拳')
	    user_choice = input()
	
	# 亮拳
	print('————战斗过程————')
	print('电脑出了：%s' % computer_choice)
	print('你出了：%s' % user_choice)
	
	# 胜负
	print('—————结果—————')
	if user_choice == computer_choice:  # 使用if进行条件判断
	    print('平局！')
	# 电脑的选择有3种，索引位置分别是：0石头、1剪刀、2布。
	# 假设在电脑索引位置上减1，对应：-1布，0石头，1剪刀，皆胜。
	elif user_choice == punches[punches.index(computer_choice)-1]:
	    print('你赢了！')
	else:
	    print('你输了！')
```