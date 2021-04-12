for i in {0..9}
do
  mkdir "${i}0-${i}9"
  cd "${i}0-${i}9"
  for j in {0..9}
  do
    mkdir $i$j
    cd $i$j
    echo -e "---\nlayout: euler\ntitle: Euler $i$j\nnum: $i$j\n---\n" > index.md
    touch main.js main.cpp main.py main.c
    cd ../
  done
  cd ../
done