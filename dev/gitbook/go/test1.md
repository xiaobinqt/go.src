# 节点商店

1 管理员负责上传对所有人可见的公开基础节点制品包到节点商店，基础节点为共享组件节点，所有人可在可视化开发环境安装使用。

```go
package main

import "fmt"

func isValid(s string) bool {
	stack := make([]string, 0)
	m := map[string]string{
		")": "(",
		"]": "[",
		"}": "{",
	}

	if s == "" {
		return false
	}

	sRune := []rune(s)
	if len(sRune)%2 != 0 {
		return false
	}

	for _, each := range sRune {
		str := string(each)
		if str == "(" || str == "{" || str == "[" {
			stack = append(stack, str)
			continue
		}

		if v, ok := m[str]; ok {
			if len(stack) > 0 && v == stack[len(stack)-1] {
				stack = stack[:len(stack)-1]
			} else {
				return false
			}
		}
	}

	fmt.Println(stack)
	if len(stack) > 0 {
		return false
	}
	return true
}

func main() {
	fmt.Println(isValid("]]"))
}

```

2 管理员可将开发人员的私有组件库标记共享，共享后所有人均可安装使用。

## 查看节点信息

点击左侧`节点商店`菜单，进入节点商店列表页面，可查看组件库的相关信息。任何开发人员的私有节点管理员均可见。

![界面介绍](../../../assets/admin_component1.png)

## 创建基础节点

点击`上传组件节点`按钮弹出对话框，上传节点制品包到节点商店。（**注：以管理员身份上传的组件库均为公开基础节点，若管理员要上传私有节点，需切换身份到普通开发用户模式上传**）

![界面介绍](../../../assets/admin_component2.png)

## 测试私有节点

管理员需切换角色获取开发人员权限，重新登陆

![界面介绍](../../../assets/admin_component8.png)

创建新项目，项目类型选择高级APP。

![界面介绍](../../../assets/admin_component6.png)

![界面介绍](../../../assets/admin_component9.png)

进入可视化IDE开发环境

![界面介绍](../../../assets/admin_component7.png)

搜索并安装需测试的私有节点

![界面介绍](../../../assets/admin_component10.png)

<div align=center>
<img src="../../../assets/admin_component3.png" width="500" height="350" />
</div>

安装成功后，左侧控件区显示新安装的节点，可拖入编辑区进行编排测试。

![界面介绍](../../../assets/admin_component4.png)

## 共享私有节点

管理员测试完成后，可将节点标记为对所有人共享，此时私有节点将公开化，并对所有人开发人员可见。

![界面介绍](../../../assets/admin_component5.png)
