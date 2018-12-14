---
title: Docs
footer: Copyright © 2018-present Zero Gravity Marketing
---

Welcome to the ZGM Developers documentation site.  The goal is to keep our coding consistent.  Nobody likes `spaghetti code` or re-doing their work.  If you follow this guideline you will have a good time.

> Heres some relevant code

```php
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
```

::: tip 
To edit the documents, go to [/admin](/admin/) and give that page a hard refresh until the login screen pops up, then sign in with your github.
:::