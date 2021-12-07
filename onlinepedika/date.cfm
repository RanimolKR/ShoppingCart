<html>
    <head>
        <link rel="stylesheet" type="text/css" href="css/date.css">
    </head>
    <body>
        <cfset variables.today = now()>
        <cfset variables.todayDate = dateFormat(variables.today,"dd-mmm-yyyy")>
        <cfset variables.monthNumeric = month(variables.today)>
        <cfset variables.monthWord = monthAsString(variables.monthNumeric)>
        <cfset variables.lastDay = DaysInMonth(variables.today)>
        <cfset variables.lastDate = now().setDay(variables.lastDay)>
        <cfset variables.lastMonthDate = dateFormat(variables.lastDate,"dd-mmm-yyyy")>
        <cfset variables.yesterday = dateFormat(dateAdd("d", -1, variables.today),"dd-mmm-yyyy")>
        <cfset variables.lastFriday = dateFormat(now()-1,"dd-mmm-yyyy")>
        <cfset variables.friday= dateformat(variables.yesterday,"eeee")>
        <cfloop index="i" from="0" to="7">
            <cfif variables.friday NEQ "Friday">
                <cfset variables.lastFriday=dateFormat(dateAdd("d", -i, variables.yesterday),"dd-mmm-yyyy")>
                <cfset variables.friday= dateformat(variables.lastFriday,"eeee")>
            <cfelse>
                <cfbreak>
            </cfif>
        </cfloop>
        
        <cfoutput>
            <h3>Today's date: #variables.todayDate#<h3>
            <h3>Current month in numeric: #variables.monthNumeric#<h3>
            <h3>Current month in word: #variables.monthWord#<h3>
            <h3>Last day of month: #variables.lastMonthDate#<h3>
            <h3>Last friday: #variables.lastFriday#</h3>
            <h3>Last 5 days: <h3>
            <cfloop from="1" to="5" index="i">
                <cfset variables.diff=DateFormat(DateAdd("d",-i,variables.today), "dd-mmm-yyyy")>
                <cfset variables.diffDay= dateformat(diff,"eeee")>
                <cfswitch expression = #variables.diffDay#>
                    <cfcase value="Sunday"><div class="sunday"><h3>#variables.diff#- #variables.diffDay#</h3></div></cfcase>
                    <cfcase value="Monday"><div class="monday"><h3>#variables.diff#- #variables.diffDay#</h3></div></cfcase>
                    <cfcase value="Tuesday"><div class="tuesday"><h3>#variables.diff#- #variables.diffDay#</h3></div></cfcase>
                    <cfcase value="Wednesday"><div class="wednesday"><h3>#variables.diff#- #variables.diffDay#</h3></div></cfcase>
                    <cfcase value="Thursday"><div class="thursday"><h3>#variables.diff#- #variables.diffDay#</h3></div></cfcase>
                    <cfcase value="Friday"><div class="friday"><h3>#variables.diff#- #variables.diffDay#</h3></div></cfcase>
                    <cfcase value="Saturday"><div class="saturday"><h3>#variables.diff#- #variables.diffDay#</h3></div></cfcase>
                </cfswitch>
            </cfloop>
        </cfoutput>
    </body>
</html>
