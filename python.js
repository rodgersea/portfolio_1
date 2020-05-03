
$("body").on("click", "#3-0", function() {
    $("#code-div").empty()
    $("#code-div").append(`<pre><code>
    def diagonalDifference(arr):

        # declare variables
        x = 0
        lr_Sum = 0
        rl_Sum = 0

        # sums values descending left to right
        for row in arr:
            lr_Sum += row[x]
            x += 1

        # sums values descending right to left
        y = len(arr[1])-1
        for row in arr:
            rl_Sum += row[y]
            y -= 1

        return abs(lr_Sum - rl_Sum)
    </code></pre>`)
})

$("body").on("click", "#3-1", function() {
    $("#code-div").empty()
    $("#code-div").append(`<pre><code>
    def staircase(n):

        for x in range(n):
            # create string of #'s
            string1 = ("#"*(x+1))

            # find difference between len(string1) and staircase height
            str_Len = len(string1)+((n-x)-1)

            # push #'s back len(string1) spaces
            string_Rev = string1.rjust(str_Len)

        print(string_Rev)
    </code></pre>`)
})

$("body").on("click", "#3-2", function() {
    $("#code-div").empty()
    $("#code-div").append(`<pre><code>
    def miniMaxSum(arr):

        new_Array = []
        inc = 0
        sums = []

        # duplicate arr for the length of arr times, save in new_Array matrix
        for x in range(len(arr)):
            new_Array.append(list(arr))

        # delete a different value in each array
        for y in new_Array:
            del y[inc]
            inc += 1

        # sum every array, find largest and smallest value
        for z in range(len(new_Array)):
            sums.append(sum(new_Array[z]))

        print(min(sums), max(sums))
    </code></pre>`)
})

$("body").on("click", "#3-3", function() {
    $("#code-div").empty()
    $("#code-div").append(`<pre><code>
    def gridSearch(G, P):

        search = []
        # we're going to loop through the given matrix, taking care 
        # not to loop within x or y cells near the edge of the big 
        #matrix. we're going to check every value we come across 
        #until it matches the first value of the smaller matrix. the 
        #checks will continue within the xy dimensions of the smaller 
        #matrix, breaking if a false value is encountered, until 
        #either a match is found or it gets to the end of the larger 
        #matrix. returns yes if TRUE, no if FALSE

        for x in range(len(G)-(len(P)-1)):
            for y in range(len(G[0])-(len(P[0])-1)):
                if G[x][y] == P[0][0]:
                    for z in range(len(P)):
                        if (G[x+z][y:(y+len(P[0]))]) == P[z]:
                            search.append(G[x+z][y:(y+len(P[0]))])
                    if search == P:
                        return "YES"
                        break
                    search.clear()

        return "NO"
    </code></pre>`)
})

$("body").on("click", "#3-4", function() {
    $("#code-div").empty()
    $("#code-div").append(`<pre><code>
    def happyLadybugs(b):

        c = list(b)
        count = 0

        # not sortable if contains an underscore and a single character exists
        if c.count("_") != 0:
            for x in c:
                if x != "_" and c.count(x) == 1:
                    return "NO"
                    count += 1

        # not sortable if does not contain an underscore and a single character exists
        if c.count("_") == 0:
            for x in c:
                if c.count(x) == 1:
                    return "NO"
                    count += 1

        # not sortable if does not contain an underscore and not already sorted
        if count == 0 and c.count("_") == 0:
            for x in range(1, (len(c) - 1)):
                if c[x - 1] != c[x] and c[x + 1] != c[x]:
                    return "NO"
                    break

        # any other scenario means it is either sortable or is already sorted
        return "YES"
    </code></pre>`)
})

$("body").on("click", "#3-5", function() {
    $("#code-div").empty()
    $("#code-div").append(`<pre><code>
    def strangeCounter(t):

        time = t
        count = 0
        count1 = 0
        y = 0
        init = 3
        time_Ar_Start = 0

        # determine step count
        while y < time:
            y += 3 * 2 ** count
            count += 1

        # determine start value for last step
        for x in range(count -1):
            init = init * 2
        
        # determine timer start for step
        for k in range(count - 1):
            time_Ar_Start = time_Ar_Start * 2 + 1
        time_Ar_Start = time_Ar_Start * 3 + 1

        # determine time/value by shared distance from t0 and value0
        diff = abs(time_Ar_Start - time)
        location = init - diff

        return location
    </code></pre>`)
})
