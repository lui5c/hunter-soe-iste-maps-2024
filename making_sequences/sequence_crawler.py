from bs4 import BeautifulSoup, element
import os
import requests
import json
from time import sleep

import hashlib

# Function to generate MD5 hash
def generate_md5_hash(input_string):
    # Create an MD5 hash object
    md5_hash = hashlib.md5()
    
    # Update the hash object with the bytes of the string
    md5_hash.update(input_string.encode('utf-8'))
    
    # Retrieve the hexadecimal representation of the hash
    return md5_hash.hexdigest()


# so that i request each site exactly once
def check_cache_or_get(url):
  hashy = str(generate_md5_hash(url))
  if os.path.isfile(f'cached-sequence-pages/{hashy}'):
    #print(f"using cached version of {url}")
    pass
  else:
    sleep(1)
    print(f'fetching {url}')
    page = requests.get(url)
    with open(f'cached-sequence-pages/{hashy}', 'w') as file:
      file.write(page.text)
      file.close()
  return open(f'cached-sequence-pages/{hashy}', 'r')


# this goes through a website and returns the resource/item IDs
def get_sequence_link_from(link):
  selectors = [
    '#main-content > ul > li > a',
    'dl > dd > ul> li > a',
    '#main-content > p > a'
  ]
  page = check_cache_or_get(link)
  soup = BeautifulSoup(page, features='html.parser')
  to_return = []
  amt = 0
  for selector in selectors:
    for a in soup.select(selector):
      if a.get_text() and 'sequence' in a.get_text().strip().lower():
        to_return.append(to_return.append(("https://education.hunter.cuny.edu" if a.get('href')[0] == '/' else '') + a.get('href')))
    #for a in to_return: print(f"\t\t{a}")
  return to_return[0]

depts = "SPED,CEDC,SEDC,SEDF,EDLIT,ARTED"
depts += ",EDESL,EDUC,LING,BILED,CEDF,MUSED"
depts += ",ECC,HED,DANED,LATED,CHND,QSTA,QSTB,QSTP"
depts += ",ECF"

depts = depts.split(",")

tester = "https://education.hunter.cuny.edu/academics/graduate-programs/childhood-special-education-learning-disabilities-advanced-certificate/childhood-special-education-learning-disabilities-advanced-certificate-part-time-course-sequence-and-program-tracker/"


def get_sequence_from(link):
  page = check_cache_or_get(link)
  soup = BeautifulSoup(page, features='html.parser')
  text = soup.get_text()
  to_return = []
  for a in text.split("\n"): 
    a = a.strip()
    if any(word in a for word in depts):
      #  s = f"{"".join(a.find_all(string=True, recursive=True))}"
      # need to get where the class is mentioned 
      for sch in depts: 
        index = a.find(sch)
        if index > -1:
          # if we find a school code, take the first two words after it
          school_and_code = a[index:].split(" ")[:2]
          if len(school_and_code) == 2:
            school, code = school_and_code
            #s = a.strip()
            #print(f'{school},{code}', end="")
            #print(all(n in [str(i) for i in range(10)] for n in code))
            if all(n in [str(i) for i in range(10)] for n in code) and any(d in school for d in depts):
              #input()
              while len(code) < 5: code += "0"
              to_add = " ".join([school, code])
              if to_add not in to_return: to_return.append(to_add)
  return (link, to_return)


"""
document.querySelectorAll('li.item > div:nth-child(2) > div:nth-child(2) 
> span:nth-child(1) > a:nth-child(1)').forEach(a => console.log(a.textContent.trim()))
"""
def get_course_sites_from_main(soup):
  to_return = {}
  for a in soup.select('#main-content > ul > li > a:nth-child(1)'):
    # add the location as a base
    to_return[a.string.strip()] = ("https://education.hunter.cuny.edu" if a.get('href')[0] == '/' else '') + a.get('href')
  return to_return
    

final_object = {}

# these have the sequences present immediately
edge_cases = ['Adolescent Mathematics Professional Certificate (MA)',
'Childhood Education with a Specialization in STEM (MSEd)',
'Childhood Special Education – Behavior Disorders (Advanced Certificate)',
'Childhood Special Education – Behavior Disorders (MSEd)',
'Childhood Special Education – Behavior Disorders – with prior NYS Childhood or PreK-6 Certification (MSEd)',
'Early Childhood Education (Advanced Certificate)',
'Early Childhood Education – with prior NYS Certification (MSEd)',
' Educational Psychology (MA) ',
' Elementary Mathematics Specialist Program (MSEd) ',
' Professional Certification (Advanced Preparation) in Special Education – Behavior Disorders (MSEd) ',
' Professional Certification (Advanced Preparation) in Special Education – Learning Disabilities (MSEd) '
]

included_raw=[
'East Harlem Teaching Residency – Adolescent Special Education (MSEd)',
'East Harlem Teaching Residency – Childhood Special Education (MSEd)',
'East Harlem Tutorial Program – Childhood Special Education (Advanced Certificate)',
'Educational Leadership – SBL/SDL (MSEd) – Collaborative Leadership Advancing School Success (CLASS) Track',
'Education Leadership – School District Leader (Advanced Certificate) ',
' Gifted Education Extension (Advanced Certificate) ',
' NYC Teaching Collaborative – Adolescent Special Education (MSEd) ',
' NYC Teaching Collaborative – Bilingual (MSEd) ',
' NYC Teaching Collaborative – Childhood Special Education D75 (MSEd) ',
' NYC Teaching Fellows – Adolescent Special Education (MSEd) ',
' NYC Teaching Fellows – Bilingual (MSEd) ',
' NYC Teaching Fellows – Childhood Special Education D75 (MSEd) ',
' Intensive Teacher Institute – Bilingual Special Education (ITI-BSE) – Bilingual Extension Program ',
' Mathematics Development (Advanced Certificate) ',
' Mathematics and Technology (Advanced Certificate) ',
' Professional Certification (Advanced Preparation) in Special Education – Early Childhood Special Education (MSEd) ',
' Science and Robotics (Advanced Certificate) ',
' Science and Technology (Advanced Certificate) ',
' TESOL Intensive Teacher Institute (ITI) ',
' Yonkers Teacher Academy – Adolescent Special Education (MSEd) ',
]

included_raw = [a.strip() for a in included_raw]
edge_cases = [a.strip() for a in edge_cases]

#for a in included_raw: print(a)

firstpage = check_cache_or_get("https://education.hunter.cuny.edu/academics/graduate-programs/")



# this populates the JSON object with {"name" : link}

#print("\n\n\n\n\n\n\nNew run\n\n")
with firstpage as page:
  soup1 = BeautifulSoup(page, features='html.parser')
  final_object = get_course_sites_from_main(soup1)
  for name in final_object:
    if name in edge_cases: 
      #print(name)
      #print(final_object[name])
      pass
    elif name in included_raw:
      #print("\n\n", name)
      final_object[name] = get_sequence_from(final_object[name])
    else:
      #print("\n\n", name)
      seq_link = get_sequence_link_from(final_object[name])
      final_object[name] = get_sequence_from(seq_link)



with open('list.html', 'w') as file:
  file.write("<html><head><title>viewer</title><style>details{padding: 8px;}</style></head><body>")
  for name in final_object:
    file.write(f'<details open><summary><a href="{final_object[name][0] if len(final_object[name]) == 2 else final_object[name]}">{name}</a></summary><ul>')
    if len(final_object[name]) == 2:
      for j in final_object[name][1]:
        file.write(f'<li>{j}</li>')
    else:
      file.write(f'<li>{final_object[name]}</li>')
    file.write("</ul></details>")
  file.write("</body></html>")
  file.close()


with open('courses.csv', 'w') as file2:
  file2.write("sequence name,link,sequence\n")
  for name in final_object:
    if name not in edge_cases:
      file2.write(f'{name},{final_object[name][0]},\"{', '.join(final_object[name][1])}\"')
      file2.write('\n')
    else:
      file2.write(f'{name},{final_object[name]},\"\"\n')
  file2.close()






  """

  """