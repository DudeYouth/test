# coding:utf-8

import os
import io 
import sys

# 函数开始
def auto_git():
    # 检测语法python2.7使用raw_input   3.6使用input  
    try :
        commit = raw_input('commit message:')
    except:
        commit = input('commit message:')

    if(commit=='' or not commit.strip()):
        commit = '测试'

    os.system('git pull origin master')
    os.system('git add .')
    os.system('git commit -m%s'%(commit))
    os.system('git push origin master')
    auto_git()
# 函数结束

# 非函数部分
auto_git()