n = int(input("Kako visok naj bo vrcek? "))

def NarisiVrcek(height):
 handleStart = '|¯¯'
 content = '*****'
 verticalHandle = '|  '
 spaces = '   '
 handleEnd = '|__'

 print(handleStart + content)
 for row in range(height-3):        
  print(verticalHandle + content)
 print(handleEnd + content)    
 print(spaces + content)      

NarisiVrcek(n);