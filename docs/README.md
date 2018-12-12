---
title: Docs
footer: Copyright © 2018-present Zero Gravity Marketing
---

To edit the documents, go to https://zgm-docs-developer.netlify.com/admin and give that page a hard refresh until the login screen pops up, then sign in with your github.

> Heres some relevant code

<pre style="color:white">
function zgm($dev_team = [], $work_quality = 0){
	if (!empty($dev_team):
		foreach($dev_team as $team_member):
			if ($team_member['work_quality'] > 80):
				$team_member['life_quality']++;
				$team_member['salary']++;
			endif;
		endforeach;
	endif;
}
</pre>
