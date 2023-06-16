from os import *

def get_data(): 
    files = listdir("./icons")
    str = ""
    for file in files:
        str += f"<img src=\"/icons/{file}\" alt=\"{file.split('.')[0]}\">\n"
    print(str)


if __name__ == "__main__":
    get_data();
