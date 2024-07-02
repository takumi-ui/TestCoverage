old_ifs=$IFS
IFS=''
declare -a array=() 
while IFS='' read -r line
do
    array+=($line)
done < karma/coverage/--code-coverage/coverage.txt

IFS=$old_ifs

# echo ${array[@]}
# echo ${array[1]}
# echo ${array[2]}
# echo ${array[3]}
# echo ${array[4]}
# echo ${array[5]}
# echo ${array[6]}
echo ${array[@]}
json_array=$(printf "%s\n" "${array[@]}" | jq -R . | jq -s)
echo $json_array
json_string=$(jq -n --arg array "$json_array" '$array')
echo $json_string

echo $HOME