import pandas as pd
import json

dict_of_dfs = pd.read_excel('gsheet-7-12.xlsx', sheet_name=None)

standards = []
indicators = []
with open('standards.json', 'r') as file:
  d = json.load(file)
  standards = d['standards']
  indicators = d['indicators']
  file.close()


indicators_to_cols = {}
for i in indicators:
  indicators_to_cols[i.split('.')[0]] = []
short_indicators = [k for k in indicators_to_cols.keys()]

school_indicator_cols = {}

a = None

# the job of this loop is to get the columns where each cell stores its indicator info

for dic in dict_of_dfs:
  df = dict_of_dfs[dic]
  for row_index in range(len(df.loc[:,:])):
    if indicators[1] in [s for s in df.loc[row_index] if type(s) == type("o")]:
      school_indicator_cols[dic] = []
      a = df
      print(dic, 'has indicators on row', row_index)
      for col_index in range(0, len(df.loc[row_index])):
        cell_contents = df.iloc[row_index, col_index]
        # check if an indicator string is in the cell
        if type(cell_contents) == type("o") and any(s in cell_contents for s in short_indicators):
          # keep track of col_index in multiple ways
          indicators_to_cols[cell_contents.split('.')[0]].append(col_index)
          school_indicator_cols[dic].append(col_index)
      break

schools = [k for k in school_indicator_cols.keys()]


class_to_indicators = {}


for dic in dict_of_dfs:
  df = dict_of_dfs[dic]
  course_number_column = -1
  returner = {}

  if dic not in schools:
    continue

  # first, we need to know what to index in the dictionary
  for c in df:
    col = df[c]
    course_number_column += 1
    #print(col)
    #input(df.iloc[:,col])
    if "course number" in [s.lower() for s in col if type(s) == type("o")]:
      #print(dic, "course number is in column", course_number_column)
      break

  # now we can go row by row
  for row_index in range(len(df.iloc[:,:])):
    row = df.iloc[row_index]

    # get the class number
    class_number = row.iloc[course_number_column]

    # we can discard the row if it isn't an actual entry / response
    if type(class_number) != type('o') or class_number.lower() in ["course number", ""]:
      continue

    # we can discard the row if there are no entries for any of the standards
    first_response_col = school_indicator_cols[dic][0]
    last_response_col = school_indicator_cols[dic][-1]
    has_no_responses = all(a == "nan" for a in [str(c).lower() for c in row.iloc[first_response_col:last_response_col]])
    if has_no_responses:
      continue

    #print(class_number)

    # create the list where we'll keep track of the standards it hits
    class_to_indicators[class_number] = []

    print(f'\n\n\n%%%%%%% {class_number} %%%%%%%\n')
    # go through each column in the row
    for col in school_indicator_cols[dic]:
      raw_cell = row.iloc[col]
      cell = "" if type(raw_cell) != type('o') else raw_cell.lower()

      to_put = ""

      print(f'indicator {short_indicators[school_indicator_cols[dic].index(col)]}: ',end='')

      if "i introduce" in cell:
        to_put += "i"

      if "i model" in cell:
        to_put += "m"

      if "do this" in cell:
        to_put += "u"

      if "assess" in cell:
        to_put += "a"

      print(f'{to_put} \t ({raw_cell})')
      class_to_indicators[class_number].append(to_put)



outfile = open('cleaned.csv', 'w')
outfile.write('class code')
for i in short_indicators: outfile.write(f',{i}')
outfile.write('\n')
for c in class_to_indicators:
  outfile.write(f'{c}')
  for i in class_to_indicators[c]:
    outfile.write(f',{" " if i == "" else i}')
  outfile.write('\n')
outfile.close()










